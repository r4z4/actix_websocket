import React, { useEffect, useRef } from "react";
import Avatar from "./avatar"
function ConvoItem({ right, content, username }) {
    console.log(content);
    if (right) {
        return (
            <div className='w-full flex justify-end'>
                <div className='flex gap-3 justify-end'>
                    <div className='max-w-[65%] bg-violet-500 p-3 text-sm rounded-xl rounded-br-none'>
                        <p className='text-white'>{content}</p>
                    </div>
                    <div className='mt-auto'>
                        <Avatar>{username}</Avatar>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='flex gap-3 w-full'>
            <div className='mt-auto'>
                <Avatar color='rgb(245 158 11)'>{username}</Avatar>
            </div>
            <div className='max-w-[65%] bg-gray-200 p-3 text-sm rounded-xl rounded-bl-none'>
                <p>{content}</p>
            </div>
        </div>
    )
}
/**
 *  Returns an HTML list of Convos
 *  @param {Convo} _ Convo object arg
 *  @returns {HTMLElement} HTML.
 */
export default function Convo({ data, auth, users }) {
    console.log(data);
    console.log("Convo");
    const ref = useRef(null);
    useEffect(() => {
        ref.current?.scrollTo(0, ref.current.scrollHeight)
    }, [data]);
    return (
        <div className='p-4 space-y-4 overflow-auto' ref={ref}>
            {
                data && (
                    data.map(item => {
                        return <ConvoItem
                            right={item.user_id === auth.id}
                            content={item.content}
                            username={users.get(item.user_id)}
                            key={item.id} />
                    })
                )
            }
        </div>
    )
}