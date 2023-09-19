import React from 'react';

type Props = {
    content: Array<string>
}

const List = ({ content }: Props) => {
    return (
        <ol className='list-inside space-y-2 text-sm text-black'>
            {
                content.map((content, index) => (
                    <li key={index}><strong>{index + 1}.</strong> {content}</li>
                ))
            }

        </ol>
    );
};

export default List;
