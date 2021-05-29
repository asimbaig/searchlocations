import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4001"

export const getFilteredLocations = async (searchTxt: string): Promise<AxiosResponse<ApiDataType>> => {
  try {
    //make get request to api for filtered locations
    const locations: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/locations/"+ searchTxt
    )
    return locations
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllLocations = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    //make get request to api for all locations
    const locations: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/locations/all/" 
    )
    return locations
  } catch (error) {
    throw new Error(error)
  }
}