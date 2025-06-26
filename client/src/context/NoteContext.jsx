"use client"
import ApiManager from '@/config/api.config';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';


const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const [note, setNote] = useState(null);
    const [allNote, setAllNote] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    // const pathname = usePathname()


    const getAllNotes = async () => {
        try {
            const res = await ApiManager.get('/note/get');
            setAllNote(res.data.allNote);
        } catch (e) {
            setAllNote([]);
        } finally {
            setLoading(false);
        }
    };


    const getNoteById = async (id) => {
        setLoading(true);
        try {
            const res = await ApiManager.get(`/note/get/${id}`);
            setNote(res.data.note);
            setMessage(res.data.message)
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };

    const createNote = async (title, content) => {
        setLoading(true);
        try {
            const res = await ApiManager.post(`/note/create`, { title, content });
            setMessage(res.data.message)

            await getAllNotes()
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };


    const updateNote = async (id, title, content) => {
        setLoading(true);
        try {
            const res = await ApiManager.patch(`/note/update${id}`, { title, content });
            setMessage(res.data.message)

            await getAllNotes()
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };

    const deleteNote = async (id, title, content) => {
        setLoading(true);
        try {
            const res = await ApiManager.delete(`/note/delete${id}`);
            setMessage(res.data.message)

            await getAllNotes()
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getAllNotes();
    }, []);

    return (
        <NoteContext.Provider value={{ loading, error, message, allNote, note, getNoteById, createNote, updateNote, deleteNote }}>
            {children}
        </NoteContext.Provider>
    );
};


export const useNote = () => useContext(NoteContext);
