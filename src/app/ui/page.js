'use client';

import { useState } from 'react';
import { DatePicker } from 'antd';



export default function TestUi() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }


  return (
    <div className="max-w-2xl mx-auto p-6">
      TEST UI
      <DatePicker onChange={onChange} needConfirm />
    </div>
  );
}
