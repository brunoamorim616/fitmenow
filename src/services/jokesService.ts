import useSWR from "swr";
import { getFetcher } from "../config/api";

export function getJokesOfTheWeek() {
    const { data, error } = useSWR("/jod", getFetcher);
    if (data) return data;
    return error;
}
