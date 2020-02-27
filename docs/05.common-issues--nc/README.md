---
permalink: /common-issues/
---

# Common Issues

## Job name mismatch

When running a node with multiple inputs, make sure that all inputs have the same job names.
As an example, say you want to run the node `num-adder` with two numbers. You have two files:

```
number 1.txt:
| 1

number 2.txt:
| 2
```

Uploading them one by one. The upload will probably detect two jobs: `number 1` and `number 2`.
This results in the following file structure for the runtime inside the node:

```
/input
  /1
    /number 1
      /file.txt:
        > 1
  /2
    /number 2
      /file.txt:
        > 2
```

Now the process tries to run twice for two jobs, `number 1` and `number 2`. Every job will try to
look for `/input/1/<job>` and `/input/2/<job>`. Since neither `/input/1/number 2` nor
`/input/1/number 2` exist, this process will fail for both jobs.

In the worst case, one of the inputs might be optional with a default value. The workflow runs
without failure and the error is hidden. But in the end, the result will be wrong and unexpected.

To solve this, make sure that you upload two jobs with the **same name**. This can be achieved by

1. Renaming `number 1.txt` locally to `addition-job.txt` before uploading.
1. Uploading `addition-job.txt`.
1. (Renaming `addition-job.txt` back to `number 1.txt`.)
1. Renaming `number 2.txt` locally to `addition-job.txt` before uploading.
1. Uploading `addition-job.txt`.
1. (Renaming `addition-job.txt` back to `number 2.txt`.)

Now you have two data sets for each input with the exact same job name. The resulting file
structure will be understood correctly by the node:

```
/input
  /1
    /addition-job
      /file.txt:
        > 1
  /2
    /addition-job
      /file.txt:
        > 2
```
