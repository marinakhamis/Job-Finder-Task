# IDSC TASK - by Marina Khamis

- Using React version "^18.1.0"

- Note: If you're getting this error

```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true. (Reason: CORS request did not succeed). Status code: (null).
```

That's coming from googleMapsAPI because you're probably using AdBlock extension on your browser, disabling it should solve the problem

- Functionality:
  - State management for APIs using redux
  - DOM Manipulation using functional/ class components (using state and props)
  - Problem solving: Converting ISODate format coming from the API to "number" days ago

    ```
    Time coming from API: "2022-04-09T00:03:49.583Z":
    Converted to: 35 days ago
    ```
