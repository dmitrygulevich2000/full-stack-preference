import React from "react";

import Form from "./Form";

const ApplyingResults = ({props})=> {
    return (
    <Form props={
        {
          name: 'results',
          header: 'Как закончилась раздача?',
          items: 
          [
            {
              name: 'champ',
              header: 'Кто чемпион?',
              type: 'text',
              variants: 
              [
                  {
                    value: 'mitya'
                  }
              ]
            },
            {
              name: 'points',
              header: 'Сколько очков за победу?',
              type: 'checkbox',
              variants: 
              [
                  {
                    value: '10',
                    label: '10'
                  },
                  {
                    value: '20',
                    label: '20'
                  }
              ]
            },
          ]
        }
    }></Form>
  )
}

export default ApplyingResults