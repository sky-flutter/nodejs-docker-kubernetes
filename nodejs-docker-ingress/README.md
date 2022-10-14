# NodeJS-Docker-Ingress
This is sample repository which showcases how to create different nodejs app and serve on the same DNS.

### Prerequisite:
1. Kubernetes
2. Minikube
3. NodeJS

-Add line in the /etc/hosts file: ``` rx.cloths.com <minikube-ip> ```

- To get minikube ip, type command: ``` minikube ip ```

### Steps to run app
1. ``` minikube start ```
2. ``` minikube dashboard ```
3. ``` kubectl create ns ecommerce ```
4. ``` cd k8s && kubectl apply -f . -n ecommerce```

- http://rx.cloths.com/products - Products page
- http://rx.cloths.com/orders - Orders page
- http://rx.cloths.com/notifications - Notifications page

