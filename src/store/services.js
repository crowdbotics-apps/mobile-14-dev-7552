import axios from "axios"
const newPlugin41 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7552/storyboard/8886/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
