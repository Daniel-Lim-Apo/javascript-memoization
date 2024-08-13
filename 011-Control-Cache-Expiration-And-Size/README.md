# Middleware with Memoization and Cache Configuration

## Step 1: Cache Configuration

- Define a configuration specifying:
  - **`max`**: The maximum number of items that can be stored in the cache.
  - **`maxAge`**: The maximum time an item can remain in the cache before expiring (in milliseconds).

## Step 2: Middleware Structure

- Create a middleware that will be applied to all routes or specific routes in your application.

## Step 3: Identifying Requests

- For each request, generate a unique cache key based on the request URL and query parameters to ensure that different requests are handled separately.

## Step 4: Cache Check

- Check if the response for the generated cache key is already stored in the cache.
  - If it is:
    - Verify if the cached item is still valid by comparing the current time with the item's timestamp.
    - If valid, return the cached response.
    - If not valid, remove the item from the cache.

## Step 5: Capturing and Storing the Response

- If the response is not in the cache, proceed with the original request processing.
- Capture the generated response before sending it to the client.
- Store the response in the cache, associated with the previously generated key, along with a timestamp indicating when it was stored.

## Step 6: Cache Management

- After adding a new item to the cache, check if the cache size exceeds the defined maximum (`max`).
  - If it does, remove the oldest item from the cache to free up space.

## Step 7: Sending the Response

- Send the response to the client.
- Ensure that the cache logic and response sending are properly integrated so that the middleware does not interrupt the normal application flow.

## Step 8: Applying the Middleware

- Apply the middleware to the server or specific routes so that it is executed on all relevant requests.

## Step 9: Testing and Validation

- Test the middleware with different types of requests to ensure the cache is working as expected:
  - Verify that the response is correctly stored and retrieved from the cache.
  - Ensure that items in the cache are expired and removed according to the configured rules.

## Step 10: Monitoring and Adjustments

- Monitor performance and adjust the cache settings (`max` and `maxAge`) as needed to optimize memory usage and ensure that quick responses are returned whenever possible.
