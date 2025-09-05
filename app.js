class PlantApi {
  constructor(resource) {
    this.resource = resource;
  }

  async getApi() {
    const api = await axios.get(this.resource);
    return api.data;
  }
}
