# Simple-App
A simple Node Js based web app involving a CI pipeline and testing.

# Details

Language: Node Js

Endpoints:

``` / ```

Has the following http response:

```{"message":"Technical Challenge, please see /healthcheck for application information"}```

``` /healthcheck ```

Has the following http response:

```{
  "myapplication": [
    {
      "version": "1.0",
      "description" : "pre-interview technical test",
      "lastcommitsha": "abc57858585"
    }
  ]
}
```
