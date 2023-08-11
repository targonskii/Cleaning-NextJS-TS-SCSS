"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ModalHeader from "../ModalHeader/ModalHeader";
import { AuthModalProps } from "@/types";
import googleIcon from "../../assets/icons/google.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import key from "../../assets/icons/key.svg";

import styles from "./AuthModal.module.scss";

const AuthModal = ({ onClose }: AuthModalProps) => {
    const tAuth = useTranslations("Auth");
    const auth = {
        button: {
            singUp: tAuth("button.singUp"),
            logIn: tAuth("button.logIn"),
            next: tAuth("button.next"),
            back: tAuth("button.back"),
            send: tAuth("button.send"),
            done: tAuth("button.done"),
        },
        placeholder: {
            firstName: tAuth("placeholder.firstName"),
            lastName: tAuth("placeholder.lastName"),
            dateOfBirth: tAuth("placeholder.dateOfBirth"),
            email: tAuth("placeholder.email"),
            mobilePhone: tAuth("placeholder.mobilePhone"),
            emailOrPhoneNumber: tAuth("placeholder.emailOrPhoneNumber"),
            password: tAuth("placeholder.password"),
            newPassword: tAuth("placeholder.newPassword"),
            repeatNewPassword: tAuth("placeholder.repeatNewPassword"),
            verificationCode: tAuth("placeholder.verificationCode"),
            pleaseEnterEmail: tAuth("placeholder.pleaseEnterEmail"),
            wrongFormat: tAuth("placeholder.wrongFormat"),
        },
        title: {
            singUp: tAuth("title.singUp"),
            logIn: tAuth("title.logIn"),
            verification: tAuth("title.verification"),
            forgotPassword: tAuth("title.forgotPassword"),
            yourPasswordWasChanged: tAuth("title.yourPasswordWasChanged"),
        },
        hint: {
            forgotPassword: tAuth("hint.forgotPassword"),
            code: tAuth("hint.code"),
            expirationTime: tAuth("hint.expirationTime"),
            hasExpired: tAuth("hint.hasExpired"),
        },
    };

    const [step, setStep] = useState<string>("initial");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [emailOrPhone, setEmailOrPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [code, setCode] = useState<string>("");

    const renderStep = () => {
        switch (step) {
            case "initial":
                return (
                    <>
                        <ModalHeader onClose={onClose} title={""} />
                        <div className={styles.authModal__main}>
                            <button
                                className={styles.authModal__submit}
                                onClick={() => setStep("signup")}
                            >
                                {auth.button.singUp}
                            </button>
                            <button
                                className={styles.authModal__submit}
                                onClick={() => setStep("login")}
                            >
                                {auth.button.logIn}
                            </button>
                        </div>
                        <div className={styles.authModal__social}>
                            <div className={styles.authModal__social_google}>
                                <Image
                                    src={facebookIcon}
                                    alt={"facebook icon"}
                                />
                            </div>
                            <div className={styles.authModal__social_google}>
                                <Image src={googleIcon} alt={"google icon"} />
                            </div>
                        </div>
                    </>
                );
            case "signup":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.singUp}
                        />
                        <form className={styles.authModal__main}>
                            <input
                                required
                                type="text"
                                placeholder={auth.placeholder.firstName}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                required
                                type="text"
                                placeholder={auth.placeholder.lastName}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <div className={styles.authModal__calendar}>
                                <input
                                    required
                                    type="text"
                                    placeholder={auth.placeholder.dateOfBirth}
                                    value={dob}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                            <button
                                className={styles.authModal__submit}
                                onClick={() => setStep("emailPhone")}
                                type="submit"
                            >
                                {auth.button.next}
                            </button>
                        </form>
                    </>
                );
            case "emailPhone":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.verification}
                        />
                        <form className={styles.authModal__main}>
                            <input
                                type="email"
                                placeholder={auth.placeholder.email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="tel"
                                placeholder={auth.placeholder.mobilePhone}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <button
                                className={styles.authModal__submit}
                                onClick={() => setStep("initial")}
                                type="submit"
                            >
                                {auth.button.next}
                            </button>
                        </form>
                    </>
                );
            case "login":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.logIn}
                        />
                        <form className={styles.authModal__main}>
                            <input
                                type="text"
                                placeholder={
                                    auth.placeholder.emailOrPhoneNumber
                                }
                                value={emailOrPhone}
                                onChange={(e) =>
                                    setEmailOrPhone(e.target.value)
                                }
                            />
                            <input
                                type="password"
                                placeholder={auth.placeholder.password}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <a
                                className={styles.authModal__hint}
                                onClick={() => setStep("forgotPassword")}
                            >
                                {auth.hint.forgotPassword}
                            </a>
                            <button
                                className={styles.authModal__submit}
                                onClick={onClose}
                                type="submit"
                            >
                                {auth.button.logIn}
                            </button>
                        </form>
                    </>
                );
            case "forgotPassword":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.forgotPassword}
                        />
                        <form className={styles.authModal__main}>
                            <input
                                type="text"
                                placeholder={auth.placeholder.pleaseEnterEmail}
                                value={emailOrPhone}
                                onChange={(e) =>
                                    setEmailOrPhone(e.target.value)
                                }
                            />
                            <button
                                className={styles.authModal__send}
                                onClick={() => setStep("code")}
                                type="submit"
                            >
                                {auth.button.send}
                            </button>
                        </form>
                    </>
                );
            case "code":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.forgotPassword}
                        />
                        <form className={styles.authModal__main}>
                            <input
                                type="text"
                                placeholder={auth.placeholder.pleaseEnterEmail}
                                value={emailOrPhone}
                                onChange={(e) =>
                                    setEmailOrPhone(e.target.value)
                                }
                            />
                            <input
                                type="text"
                                placeholder={auth.placeholder.verificationCode}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <button
                                className={`${
                                    code
                                        ? styles.authModal__send
                                        : styles.authModal__hide
                                }`}
                                onClick={() => setStep("newPassword")}
                                type="button"
                            >
                                {auth.button.send}
                            </button>
                        </form>
                    </>
                );
            case "newPassword":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.forgotPassword}
                        />
                        <form className={styles.authModal__main}>
                            <input
                                type="password"
                                placeholder={auth.placeholder.newPassword}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder={auth.placeholder.repeatNewPassword}
                                value={repeatPassword}
                                onChange={(e) =>
                                    setRepeatPassword(e.target.value)
                                }
                            />
                            <button
                                className={styles.authModal__send}
                                onClick={() => setStep("success")}
                                type="button"
                            >
                                {auth.button.done}
                            </button>
                        </form>
                    </>
                );
            case "success":
                return (
                    <>
                        <ModalHeader
                            onClose={onClose}
                            title={auth.title.forgotPassword}
                        />
                        <form className={styles.authModal__success}>
                            <div className={styles.authModal__success_title}>
                                <h2>{auth.title.yourPasswordWasChanged}</h2>
                                <div className={styles.authModal__success_key}>
                                    <Image src={key} alt={"key icon"} />
                                </div>
                            </div>
                            <button
                                className={styles.authModal__success_send}
                                onClick={() => setStep("login")}
                                type="submit"
                            >
                                {auth.button.done}
                            </button>
                        </form>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.authModal}>
            <div className={styles.authModal__container}>{renderStep()}</div>
        </div>
    );
};

export default AuthModal;
