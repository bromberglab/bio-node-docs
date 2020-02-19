# Bio-Node

Documentation for [Bio-No.de](https://bio-no.de)

## How do I install my own deployment of Bio-Node?

::: tip
With every link to the GCP console, make sure you're navigated to the right project and account before changing anything.

Running GKE **will cost you money**.
:::

The [install script][1] addresses this task. To create a custom deployment, follow these steps:

1. A [GCP][2] project is needed for Bio-Node. Since GKE is used for easy kubernetes deployment.
    1. If you don't have one created yet, make a new project.
    1. GCP projects take a while to initialize. Make sure the project is fully created before continuing.
1. Install the requirements.
    1. Running the install script will check all requirements and tell you which ones are missing.
    1. [gcloud sdk][3] is needed to interact with your GCP resources. Make sure you set your config to the desired project with  
       `gcloud config set project [project-id]`
1. Since we work with GKE, the API has to be activated beforehand.
    1. The gcloud command to create a cluster will fail if the API was not activated.
    1. In this case, a URL will be printed where it can be turned on.
    1. As an alternative, just visit the [webpanel][4] before running the install script.
    1. Once the _create cluster_ button is no longer grayed out, you can continue with the installation.
1. As of the time of writing, GCE requires a service account in your project to function. Check the [console][5] to see if an account exists with the name  
   `[project-id]-compute@developer.gserviceaccount.com`  
   And has editor permissions.
    1. If this account is missing, your project is in an inconsistent state. Check with GCP support.
1. Run the install script (after setting execution permissions with `chmod +x [file]`)
1. Validate all settings and validate that the account that's currently authenticated with gcloud is also associated with your project.
    1. To change the account, use `gcloud auth login`
    1. To change any of the settings, edit `.bio-node.config`
1. (Optional) If you have domain which you can point to the public IP of the cluster, use the [Ingress][6] access mode.
    1. Setting DNS settings takes hours, and there is multiple failure cases. It's safer to set this up separately using the [instructions][7] from Google.
    1. An ingress is the easiest way to achieve HTTPS encrypted traffic reliably.
1. (Optional) [Sendgrid][8] can be used as an email server for communications like password reset emails.
1. After the setup is complete, make sure to navigate to the URL `/api/createadmin`  
   `admin:<password>`  
    will tell you how to login to the admin panel with superuser privileges.

::: danger
**This URL is one time use only!**

After the first visit to `/api/createadmin` the password is not retrievable without re-installing Bio-Node.
:::

[1]: https://github.com/bromberglab/webservice-server/blob/master/create-deployment.sh
[2]: https://console.cloud.google.com/
[3]: https://cloud.google.com/sdk/gcloud
[4]: https://console.cloud.google.com/kubernetes/
[5]: https://console.cloud.google.com/iam-admin/serviceaccounts
[6]: https://cloud.google.com/kubernetes-engine/docs/concepts/ingress
[7]: https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs
[8]: https://sendgrid.com/
