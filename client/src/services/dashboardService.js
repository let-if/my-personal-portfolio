import API from "../api/axios";

export async function getDashboardStats() {

  const response = await API.get("/dashboard/stats");

  return response.data.data;

}