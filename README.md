Summary

This version of the code will start by requesting the user's location. While waiting for the location data, 
it shows a loading spinner. Once the location is available, the map is rendered and centered on the user's current location, 
providing a more user-friendly experience.

Loading Indicator:

    While waiting for the user's location to be fetched, the app displays an ActivityIndicator (a loading spinner). This prevents the map from rendering until the location is available.

Conditional Rendering:

    The map and marker are only rendered once the location state is populated with the user's current location. This ensures the map is centered on the user's location as soon as it's available.

Initial Region:

    The initialRegion is set using the user's current location (latitude and longitude). This makes sure the map starts by focusing on the user's exact position.

