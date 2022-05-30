import React from 'react';
/* import { NavLink } from 'react-router-dom'; */
import { useState } from 'react';
import Swal from "sweetalert2";
import '../../styles/style.css';

export default function Join() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);

    const onFieldChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                break;
        }

        validateField(name);
    };

    const resetErrByFieldName = (name) => {
        switch (name) {
            case "name":
                setNameError(null);
                break;
            case "email":
                setEmailError(null);
                break;
            default:
                break;
        }
    };

    const resetFields = () => {
        setName("");
        setEmail("");
    };

    const setErrorByFieldName = (name, error) => {
        switch (name) {
            case "name":
                setNameError(error);
                break;
            case "email":
                setEmailError(error);
                break;
            default:
                break;
        }
    };

    const validateField = (e) => {
        if (!e.target || !e.target.name) {
            return;
        }

        const { name, value } = e.target;
        resetErrByFieldName(name);

        if (!value) {
            setErrorByFieldName(name, "Заполните поле");
            return;
        }

        let error = null;
        switch (name) {
            case "name": {
                if (value.length < 2) {
                    error = "Имя должно содержать минимум 2 символа";
                }
                break;
            }
            case "email": {
                const emailRgx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                if (!emailRgx.test(String(value).toLowerCase())) {
                    error = "Некорректный email";
                }
                break;
            }
            default:
                break;
        }

        if (error) {
            setErrorByFieldName(name, error);
        }

        return error == null;
    };

    const validateAllFields = () => {
        const items = [
            { name: "name", value: name },
            { name: "email", value: email },
        ];

        return items.every((item) => validateField({ target: item }));
    };

    const onSubmit = () => {
        const isValid = validateAllFields();

        if (isValid) {
            resetFields();
            Swal.fire({
                title: "Поздравляем",
                text: "Ваша заявка отправлена успешно, ожидайте нашего письма.",
                icon: "success",
                confirmButtonText: "Хорошо",
            });
            return;
        }

        Swal.fire({
            title: "Ошибка",
            text: "Что-то не так, проверьте введенные данные.",
            icon: "warning",
            confirmButtonText: "Хорошо",
        });

    };

    return (
        <div className='join'>
            <div className='join_image'></div>
            <form className='join_form'>
                <p className='section_left'>Присоединяйся <br></br> к нашей команде</p>

                {nameError && <div className="errors">{nameError}</div>}
                <input
                    className='input'
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={name}
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                ></input>

                {emailError && <div className="errors">{emailError}</div>}
                <input
                    className='input'
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={email}
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                ></input>

                <input
                    className="btn_submit"
                    type="button"
                    value="Отправить"
                    onClick={onSubmit}
                />

            </form>
        </div>
    );
}

