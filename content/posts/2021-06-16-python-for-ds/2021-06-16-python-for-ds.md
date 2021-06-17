---
title: Python (Conda) Setup on macOS
subtitle: What is Conda?
description: We'll walkthrough getting Conda setup on macOS.
image: img/2021-06-16-python-for-ds/index.png
tags:
  - Python
  - macOS
author: Josh
createdAt: 2021-06-16 08:00
---

# What is Conda

Conda is a package and environment manager for many languages. We're working specifically with Python and prepping an environment for data science workflows. Conda is a popular platform for data scientists. The platform offers a package manager to install all the popular statistical and analytical libraries and toolkits such as Jupyter, Pandas, Numpy, etc.

## Install Miniconda

We're going forward with the Miniconda installation, which is a lighter option. We can specify which packages we want to install with the Mini version, the full Conda installation will include over 1500 packages (3GB) by default.

At the time of this post, the download is available from the following [link](https://docs.conda.io/en/latest/miniconda.html).

Download the latest release (Python 3.9) .pkg option. Follow the wizard with all default options, not really much to configure other than the installation location.

![Conda Install](/img/2021-06-16-python-for-ds/conda-download.png)

Confirm your installation by opening a new terminal window and enter the following:

```bash
conda -V

# OUTPUT:
conda 4.9.2
```

<br/>

<blockquote class="blockquote text-h5">
Python development best practice is to create a virtual environment for each project. We'll use Conda to create a virtual environment for our projects as well.
</blockquote>

<br/>

## List Conda Environments

A <code class="language-bash">base</code> environment is created during installation, the command shown below will list all conda environments.

The asterisk on the <code class="language-bash">base</code> environment indicates the **Active** environment.

```bash
conda env list

# OUTPUT:
# conda environments:
base                  *  /Users/itsjoshcampos/opt/miniconda3
```

<br/>

## Create new Conda Environment

By default, Conda environments are created in the global path directory for Anaconda. They are not created in the current working directory your terminal is set to. If you want to change the installation path add <code class="language-bash">--prefix ./filePath</code> in the create command.

Let's break down the <code class="language-bash">conda create</code> command below...

<code class="language-bash">-n data-science-env</code>: name of the environment.

<code class="language-bash">python=3.7</code>: python version to be used.

<code class="language-bash">pandas jupyter seaborn scikit-learn keras tensorflow</code>: packages that will be installed when the environment is created. Packages can also be installed later.

```bash
conda create -n data-science-env python=3.7 pandas jupyter seaborn scikit-learn keras tensorflow

# proceed ([y]/n)? Type Y to continue.

# 'done' is shown when install is complete


 done
```

<br/>

## Activate Conda Environment

To activate this environment, use

```bash
conda activate data-science-env
```

<br/>

## List Conda Environments

The asterisk has moved to the <code class="language-bash">data-science-env</code> now that it is activated.

```bash
conda env list


# OUTPUT:
# conda environments:
#
base                      /Users/itsjoshcampos/opt/anaconda3
data-science-env       *  /Users/itsjoshcampos/opt/anaconda3/envs/data-science-env
```

<br/>

## List Active Environment Packages

```bash
conda list


#OUTPUT:
# packages in environment at /Users/itsjoshcampos/opt/anaconda3/envs/data-science-env:
#
# Name                    Version                   Build  Channel
```

<br/>

## Install Package

```bash
conda install pandas==1.2.4


# proceed ([y]/n)? Type Y to continue.

# Wait for done confirmation
```

<br/>

## Remove Package

```bash
conda remove pandas

# ...Wait for confirmation

  removed specs:
    - pandas
```

<br/>

## Deactivate Conda Environment

The base environment will be activated when all other environments are deactivated.

To deactivate an active environment, use

```bash
conda deactivate
```

<br/>

## Remove Conda Environment

When a project is no longer needed, you can remove the environment with all its baggage.

To discard an environment, use

```bash
conda env remove -n data-science-env
```

<br/>

Further Conda environment documentation can be found [here](https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html#managing-environments).
