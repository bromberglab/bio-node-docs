# Images

Bio Node works with docker images. To make a docker image compatible, it needs at least one label:

    LABEL bio-node="v1.0"

You can specify labels in your Dockerfile.

::: warning
The version inside this label is arbitrary. It doesn't specify the version of Bio Node that you're complying to,
or the version of your app. For now, it's fixed to v1.0.
:::
