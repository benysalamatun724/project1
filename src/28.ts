// This is a sample TypeScript code to demonstrate how you can write a basic program using the GitHub API.
import axios from 'axios';

async function main() {
  try {
    const response = await axios.get('https://api.github.com/repos/example-repo-name');
    
    if (response.data.message === "The repository does not exist") {
      console.log("Repository does not exist.");
    } else {
      console.log("Repository exists and the message is: " + response.data.message);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
