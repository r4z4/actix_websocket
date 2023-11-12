import { useEffect, useState } from "react";
const fetchRoomData = async (room_id) => {
    console.log(`rID=${room_id}`);
    if (!room_id) return;
    const url = `http://localhost:8080/convos/${room_id}`;
    try {
        let resp = await fetch(url).then(res => res.json());
        return resp;
    } catch (e) {
        console.log(e);
    }
}
export default function useConvos(room_id) {
    const [isLoading, setIsLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const updateMessages = (resp = []) => {
        setIsLoading(false);
        setMessages(resp)
    }
    const fetchConvos = (id) => {
        setIsLoading(true)
        fetchRoomData(id).then(updateMessages)
    }
    useEffect(() => fetchConvos(room_id), []);
    return [isLoading, messages, setMessages, fetchConvos];
}