# Installing CERN ROOT (Windows Guide)

## Overview

CERN ROOT is a data analysis framework widely used in particle physics and high-energy physics experiments. Installing ROOT on Windows can sometimes be confusing for beginners, so this guide summarizes two working installation methods.

1. **Precompiled Windows Binary (recommended for beginners)**
2. **Conda Installation (recommended for scientific Python workflows)**

Both methods are explained below.

---

## Table of Contents

1. [Overview](#overview)  
2. [Method 1 — Install Using the Official Windows Binary](#method-1--install-using-the-official-windows-binary)  
3. [Method 2 — Install Using Conda](#method-2--install-using-conda)  
4. [Method Comparison](#method-comparison)  
5. [Typical ROOT Workflow](#typical-root-workflow)  
6. [Example ROOT Script](#example-root-script)  
7. [Installation Test](#installation-test)  
8. [Common Issues](#common-issues)  
9. [Using CERN ROOT with Jupyter Notebook](#using-cern-root-with-jupyter-notebook)  
10. [Useful ROOT Resources](#useful-root-resources)

---

# Method 1 — Install Using the Official Windows Binary

*(Recommended for beginners)*

## 1. Download ROOT

Go to the official ROOT download page:

https://root.cern/download

Look for a Windows installer with a name similar to:

```
root_v6.xx.xx.win64.pythonXXX.vcXX.exe
```

Example:

```
root_v6.36.08.win64.python311.vc17.exe
```

Download the `.exe` file.

---

## 2. Install Visual Studio (Required)

Before installing ROOT, install **Visual Studio Community**.

During installation select:

```
Desktop development with C++
```

ROOT depends on the Microsoft C++ compiler provided by this package.

Download Visual Studio here:

https://visualstudio.microsoft.com/

---

## 3. Install ROOT

Run the `.exe` installer you downloaded.

Install ROOT to a simple directory such as:

```
C:\root
```

Avoid installing into directories with spaces in the path.

---

## 4. Initialize ROOT

Open:

```
Visual Studio Developer Command Prompt
```

Run:

```
C:\root\bin\thisroot.bat
```

This script sets the environment variables required for ROOT.

---

## 5. Start ROOT

Run:

```
root
```

You should see something like:

```
Welcome to ROOT 6.xx
root [0]
```

This means ROOT has started successfully.

---

## 6. Test the Installation

Inside the ROOT prompt run:

```
TBrowser b;
```

A graphical ROOT browser window should open.

If it does, the installation is working correctly.

---

# Method 2 — Install Using Conda

*(Often easier for students already using Python or Jupyter)*

ROOT can also be installed using Conda from the **conda-forge** repository.

---

## 1. Install Conda

Install either:

- Anaconda  
or  
- Miniconda  

https://www.anaconda.com/download

---

## 2. Configure Conda

Open **Anaconda Prompt** and run:

```
conda config --set channel_priority strict
conda config --set solver libmamba
```

---

## 3. Create a ROOT Environment

```
conda create -n root_env -c conda-forge root
```

---

## 4. Activate the Environment

```
conda activate root_env
```

---

## 5. Start ROOT

```
root
```

---

# Method Comparison

| Method | Advantages | When to Use |
|------|------|------|
| Windows Binary | Most stable | Beginners |
| Conda | Easy integration with Python and Jupyter | Data analysis workflows |

---

# Typical ROOT Workflow

Most physicists use ROOT in one of these ways.

### Interactive ROOT

```
root
```

### Run ROOT scripts

```
root myscript.C
```

### Python + ROOT

ROOT also provides Python bindings commonly used with Jupyter notebooks.

---

# Example ROOT Script

Create a file called `hello.C`

```cpp
#include <iostream>

void hello() {
    std::cout << "Hello ROOT!" << std::endl;
}
```

Run it with:

```
root hello.C
```

---

# Installation Test

To confirm everything works correctly:

```
root
```

Then run:

```
TBrowser b;
```

A ROOT graphical browser should appear.

---

# Common Issues

## ROOT command not recognized

Run the environment setup again:

```
C:\root\bin\thisroot.bat
```

Note:  
If ROOT is installed using the Windows binary method, you may need to run this command every time you open a new terminal.

---

## Visual Studio not installed

ROOT requires the Microsoft C++ compiler.

Install **Desktop development with C++** in Visual Studio.

---

# Using CERN ROOT with Jupyter Notebook

Many physicists prefer to use ROOT inside **Jupyter Notebook** because it allows combining:

- C++ or Python analysis code
- plots
- documentation
- data visualization

This workflow is commonly used in research environments and physics labs.

---

## Method 1 — Python + ROOT (Recommended)

The easiest way to use ROOT with Jupyter is through **PyROOT**, which allows Python to call ROOT libraries.

### Install ROOT with Conda

```
conda create -n root_env -c conda-forge root
```

Activate the environment:

```
conda activate root_env
```

---

### Install Jupyter

If Jupyter is not installed:

```
conda install jupyter
```

---

### Launch Jupyter

```
jupyter notebook
```

or

```
jupyter lab
```

A browser window will open.

---

### Test ROOT in Python

Create a notebook and run:

```python
import ROOT

h = ROOT.TH1F("h","Example Histogram",100,-4,4)

for i in range(10000):
    h.Fill(ROOT.gRandom.Gaus())

c = ROOT.TCanvas()
h.Draw()
c.Draw()
```

You should see a histogram generated by ROOT.

---

## Method 2 — C++ ROOT Kernel for Jupyter (Optional)

ROOT also supports running C++ directly inside Jupyter using the ROOT interpreter.

Run:

```
root --notebook
```

ROOT will register its kernel with Jupyter.

After this you will see a **ROOT C++ kernel** option when creating a new notebook.

---

### Example ROOT Notebook Code

```cpp
TH1F h("h","Gaussian",100,-4,4);

for(int i=0;i<10000;i++)
{
    h.Fill(gRandom->Gaus());
}

h.Draw();
```

---

# Useful ROOT Resources

Official installation page:

https://root.cern/install

ROOT download page:

https://root.cern/download

ROOT documentation:

https://root.cern/doc