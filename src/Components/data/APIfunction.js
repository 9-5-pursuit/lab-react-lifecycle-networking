import axios from "axios";

async function handleAPI(endpoint, setFn) {
  try {
    const result = await axios.get(
      `https://vet-api-1.onrender.com/api/${endpoint}`
    );
    setFn(result.data);
  } catch (e) {}
}
export { handleAPI };

/**
 * API function for employees / pets whenever needed and set fn to change state
 */
