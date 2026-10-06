# Portfolio: Build and Deploy

## CI/CD

Pull requests to `main` build the Docker image without publishing it. A push to `main` builds the multi-stage Nginx image and publishes `latest` and an immutable `sha-*` tag to `ghcr.io/thuongh2/hoaithuong-portfolio`. The workflow then commits the new SHA tag to `deploy/helm/portfolio/values.yaml`; Flux sees that Git change and rolls out the new image.

The workflow uses `GITHUB_TOKEN` with `packages: write` and `contents: write`. Confirm the GHCR package is private after its first publish. The runtime cluster needs its own read-only package credential; do not store that token in GitHub Actions files or Helm values.

## k3s and Flux

Create a GitHub classic PAT with `read:packages` for an account that can read the package, then create the pull secret in the Helm release namespace:

```sh
kubectl create namespace portfolio
read -rsp "GHCR read:packages token: " GHCR_READ_TOKEN; printf '\n'
kubectl create secret docker-registry ghcr-pull-secret \
	--namespace portfolio \
	--docker-server=ghcr.io \
	--docker-username=thuongh2 \
	--docker-password="$GHCR_READ_TOKEN"
unset GHCR_READ_TOKEN
```

Connect `deploy/flux` to the existing Flux `GitRepository` named `flux-system`. Either set a Flux `Kustomization` path to `./deploy/flux`, or include `deploy/flux` from your cluster's existing Kustomize root. The HelmRelease reads the chart from the same GitRepository and installs it into the `portfolio` namespace.

The chart defaults to a `ClusterIP` service. To expose it through k3s Traefik, set `ingress.enabled: true` and replace `portfolio.example.com` in `deploy/helm/portfolio/values.yaml` with your hostname. Flux will reconcile that change too.

## Local checks

```sh
npm ci
npm run build
helm lint deploy/helm/portfolio
docker build -t portfolio:local .
```
