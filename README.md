# REST API notes

- There are 5 different requests in REST API. These are GET, POST, PUT, PATCH and DELETE requests.

  **GET**: Get a resource from the server. <br/>
  **POST**: Create or append a resource in the server. <br/>
  **PUT**: Create or overwrite a resource in the server. <br/>
  **PATCH**: Update parts of an existing resource in the server. <br/>
  **DELETE**: Delete a resource from the server.

- This part is not needed in index.js when you are working with REST API.

    ```javascript
    // REST API deals with JSON data, don't use it.
    // app.use(express.urlencoded({ limit: "50mb", extended: true }));
    app.use(express.json({ limit: "50mb" }));
    ```

- For POST method, test it with Postman. For sending data, click on "raw" radio button and from the dropdown list, choose "JSON" format. Then send the mssage like

    ```javascript
    {
        "title": "Title 2",
        "content": "This is my content."
    }
    ```

- This section prevents CORS error from another website
    ```javascript
    // CORS Error Prevention
    app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    next();
    });
    ```
