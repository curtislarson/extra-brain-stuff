# eszip

- Some interesting things in [this repo](https://github.com/denoland/eszip). Looks like they may be wanting to ship entire module graphs via a special zip file? pretty neat

One example:

```json
{
  "version": 1,
  "modules": {
    "https://gist.githubusercontent.com/lucacasonato/f3e21405322259ca4ed155722390fda2/raw/e25acb49b681e8e1da5a2a33744b7a36d538712d/hello.js": {
      "Source": {
        "source": "addEventListener(\"fetch\", (event) => {\n  event.respondWith(new Response(\"Hello World\", {\n    headers: { \"content-type\": \"text/plain\" },\n  }));\n});",
        "transpiled": "addEventListener(\"fetch\", (event)=>{\n    event.respondWith(new Response(\"Hello World\", {\n        headers: {\n            \"content-type\": \"text/plain\"\n        }\n    }));\n});\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjxodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2x1Y2FjYXNvbmF0by9mM2UyMTQwNTMyMjI1OWNhNGVkMTU1NzIyMzkwZmRhMi9yYXcvZTI1YWNiNDliNjgxZThlMWRhNWEyYTMzNzQ0YjdhMzZkNTM4NzEyZC9oZWxsby5qcz4iXSwic291cmNlc0NvbnRlbnQiOlsiYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsIChldmVudCkgPT4ge1xuICBldmVudC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJIZWxsbyBXb3JsZFwiLCB7XG4gICAgaGVhZGVyczogeyBcImNvbnRlbnQtdHlwZVwiOiBcInRleHQvcGxhaW5cIiB9LFxuICB9KSk7XG59KTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUEsRUFBQSxLQUFBLElBQUEsS0FBQTtBQUNBLFNBQUEsQ0FBQSxXQUFBLEtBQUEsUUFBQSxFQUFBLFdBQUE7QUFDQSxlQUFBO2FBQUEsWUFBQSxJQUFBLFVBQUEifQ==",
        "content_type": "text/plain; charset=utf-8",
        "deps": []
      }
    }
  }
}
```

I feel like there has to be some sort of reflective / autocomplete aspect of it based off the last update to the autocomplete api. And the same developers working on that are working on this project.
