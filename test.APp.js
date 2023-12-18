const nameRegex = /^[a-zA-Z\s]+$/;
    const addressRegex = /^[a-zA-Z0-9\s,.'-]*$/;
    const descriptionRegex = /^.{1,500}$/; // Allowing up to 500 characters for description
  
    const isNameValid = nameRegex.test(name.trim());
    const isAddressValid = addressRegex.test(address.trim());
   const isDescriptionValid = descriptionRegex.test(description.trim());
  
    if (isNameValid && isAddressValid && isDescriptionValid && profilePicture) {
      try {
        // Prepare the data to be sent to the server
        const data = {
          name: name.trim(),
          address: address.trim(),
          description: description.trim(),
          profilePicture: profilePicture,
           //Add other fields as needed
        };
  
        //Send a POST request to the server API endpoint
        const response = await fetch('https://example.com/api/update-profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // You might need to include authentication headers or tokens here
         },
          body: JSON.stringify(data),
        });
  
        // Handle the server response (you might want to check response status and handle errors)
        if (response.ok) {
          // Data updated successfully, navigate to the next screen
         navigation.navigate('Home');
       } else {
          // Handle server errors or invalid responses
          console.error('Failed to update profile:', response.statusText);
          // Show an error message to the user
         navigation.navigate('Home');
        }
} catch (error) {
        // Handle network errors or other exceptions
        console.error('Error updating profile:', error.message);
        // Show an error message to the user
      navigation.navigate('Home');
     }
    } else {
      // Show an alert indicating that the fields are not valid
      Alert.alert('Invalid Information', 'Please provide valid name/company name, address, and description.');
    }