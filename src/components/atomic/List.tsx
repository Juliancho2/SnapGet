import React from 'react';

type Props = {
    content: Array<string>
}

const List = ({ content }: Props) => {
  return (
        <ol className='list-inside space-y-4 text-sm  '>
            {
                content.map((content, index) => (
                    <li key={index} className='text-black'><strong>{index + 1}.</strong> {content}</li>
                ))
            }

        </ol>
  );
};

export default List;
