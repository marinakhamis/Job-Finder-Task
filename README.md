# IDSC TASK

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
  - P.S: I didn't highlight job types because each job has a different type, so i couldn't give each type a highlight color 
  - Candidates API are missing the avatar but I added a fallback picture
  - If there are any edits required or a possibility to extend the deadline, I'm sure I'll do my best
