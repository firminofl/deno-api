# Deno API rest example

# Resume
Ryan Dahl the original creator of Node.js (the popular server-side JavaScript runtime) announced Deno at JSConf EU 2018 on is his talk titled "10 Things I Regret About Node.js" ( From the title you can see where are we heading to ). In another word, if you are familiar with Node.js then Deno is just like that. Except that it's improved in many ways, it's created from bottom to top to be a better implementation of Node.js. - By Vincent Mancini.

# Deno X Node.js
Since Deno and Node.js serve the same purpose, it's possible to compare the two directly.

|                         |          Node         |           Deno        |
---------------------------------------------------------------------------
|          Engine         |           V8          |           V8          |
|         Written in      |   C++ & JavaScript    |   Rust & Typescript   |
|      Package managing   | package managers: npm |        Uses URLs      |
|      Importing packages |    CommonJS syntax    |      ES Modules       |
|         Security        |       Full access     |   Permissioned access |
|      TypeScript support |      Not built in     | 	   Built in       |
 
## Instalation
Deno ships as a single executable with no dependencies. You can install it using the installers below.

- Shell (Mac, Linux):
```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

- PowerShell (Windows):
```shell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

- Homebrew (Mac):
```shell
brew install deno
```

- Chocolatey (Windows):
```shell
choco install deno
```

## Getting started
Try runnig a simple program:
```shell
/home/<user>/.deno/bin/deno run https://deno.land/std/examples/welcome.ts
```

NOTE: the <user> it is your computer.
In my example it is: 
```shell
/home/filipe/.deno/bin/deno run https://deno.land/std/examples/welcome.ts
```
You can to verify the version of Deno:
```shell
/home/filipe/.deno/bin/deno --version
```
The expected output:
```shell
deno 1.1.0
v8 8.4.300
typescript 3.9.2
```

## API Rest
This project it's a simple project of structure the Deno.
In Routes you can see the HTTP methods, how: GET, POST, PUT, DELETE.

The example was worked here it's to get the chapters in description of YouTube Videos and treat the data depending your use.

The form to work with the request it's different of Node.

- Exemple
The method updateChapter in youtube-chapter-controller, if it was done in Node:
```node
updateChapter(req, res, next) {
    const { id, params } = req.params;

    // Code here...
}
```

The same method now done in Deno:
```deno
const updateChapter = async (
    { params, request, response }: {
        params: {
            id: string;
            seconds: string
        };
        request: any;
        response: any;
    },
) => { //Code here...}
```