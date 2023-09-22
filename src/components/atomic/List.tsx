import React from 'react';

type Props = {
    content: Array<string>
}

const List = ({ content }: Props) => {
  return (
        <ol className='list-inside space-y-3 text-base  '>
            {
                content.map((content, index) => (
                    <li key={index} className='text-gray-600 font-medium'><strong>{index + 1}.</strong> {content}</li>
                ))
            }

        </ol>
  );
};

export default List;
