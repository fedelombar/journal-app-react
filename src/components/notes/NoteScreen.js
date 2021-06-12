import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes_main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
        />

        <textarea
          placeholder='What happened today'
          className='notes__textarea'
        ></textarea>

        <div className='notes__image'>
          <img
            src='https://services.meteored.com/img/article/el-misterioso-rayo-verde-del-atardecer-218011-3_1280.jpg'
            alt='imagen'
          ></img>
        </div>
      </div>
    </div>
  );
};
