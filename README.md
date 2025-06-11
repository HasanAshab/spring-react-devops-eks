# SpringBoot + React Web App – DevOps Edition

**Frontend**  
[![CI pipeline](https://github.com/HasanAshab/spring-react-devops/actions/workflows/frontend-ci.yaml/badge.svg)](https://github.com/HasanAshab/spring-react-devops/actions/workflows/frontend-ci.yaml)
[![image size](https://ghcr-badge.egpl.dev/hasanashab/spring-react-devops-frontend/size)](https://github.com/HasanAshab/go-web-app-devops/pkgs/container/spring-react-devops-frontend)

**Backend**  
[![CI pipeline](https://github.com/HasanAshab/spring-react-devops/actions/workflows/backend-ci.yaml/badge.svg)](https://github.com/HasanAshab/spring-react-devops/actions/workflows/backend-ci.yaml)
[![image size](https://ghcr-badge.egpl.dev/hasanashab/spring-react-devops-backend/size)](https://github.com/HasanAshab/go-web-app-devops/pkgs/container/spring-react-devops-backend)


This is a DevOps-enhanced deployment of a [spring + react based web app](https://github.com/purshink/ReactJS-Spring-Boot-Full-Stack-App), restructured and productionized with best practices for containerization, CI/CD, and Kubernetes.

---

## 🚀 DevOps Features Implemented

* **Dockerized Build**: Multi-stage Dockerfile for efficient image creation.
* **Local Development**: `docker-compose` support with hot reload for rapid iteration.
* **Kubernetes Deployment**: Complete manifest files for deployment on **_AWS EKS_**.
* **Helm Charts**: Configurable Kubernetes manifests.
* **Ingress Management**: Ingress Controller (**_NGINX_**) for routing and external access.
* **CI with GitHub Actions**:
  * [Frontend – See more](#frontend-ci-pipeline)
  * [Backend – See more](#backend-ci-pipeline)
* **CD via Argo CD**: [See more](#cd-pipeline)

---

## 🧑‍💻 Local Development

To spin up the application locally with Docker:

```bash
docker-compose up
```

Once running, the server will be accessible at:
**[http://localhost:4200](http://localhost:4200)**

**Hot reload** is enabled—code.

---

## ⚙️ CI/CD Pipeline

### Frontend CI Pipeline
![Frontend CI Diagram](static/images/frontend-ci.png)

### Backend CI Pipeline
![Backend CI Diagram](static/images/backend-ci.png)

### CD Pipeline
![CD Diagram](static/images/cd.png)

---

## 🛠️ Prerequisites (for Prod Deployment)

* AWS EKS Cluster
* Argo CD configured and running
* Helm 3+
* NGINX Ingress Controller installed
* Docker and kubectl installed

---

## 📈 Future Improvements
* Add Prometheus/Grafana integration
* Implement healthcheck endpoints and readiness probes

---

## 🙋‍♂️ About Me
**Hasan Ashab** – DevOps Engineer  
LinkedIn: [@hasan-ashab](https://www.linkedin.com/in/hasan-ashab-b9b20a290)
Portfolio: Under development
---