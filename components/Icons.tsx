interface IconsProps {
    name: string;
    size: number;
}

function Icons({ name, size }: IconsProps) {
    const svgStyling = "transition duration-300 fill-lightPrimary-900 dark:fill-darkPrimary-900 hover:opacity-70"

    const icons: { [key: string]: JSX.Element } = {
        github:
            <svg height={size} viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg" className={svgStyling}>
                <path d="M18.3568 0.142794C8.82562 1.17432 1.15924 8.80758 0.123246 18.0913C-0.912752 27.7876 4.68163 36.4524 13.1768 39.7532C13.7984 39.9595 14.42 39.5469 14.42 38.7217V35.4208C14.42 35.4208 13.5912 35.6271 12.5552 35.6271C9.65442 35.6271 8.41123 33.1515 8.20403 31.7074C7.99683 30.8821 7.58243 30.2632 6.96083 29.6443C6.33923 29.438 6.13203 29.438 6.13203 29.2317C6.13203 28.8191 6.75363 28.8191 6.96083 28.8191C8.20403 28.8191 9.24002 30.2632 9.65442 30.8821C10.6904 32.5326 11.9336 32.9452 12.5552 32.9452C13.384 32.9452 14.0056 32.7389 14.42 32.5326C14.6272 31.0884 15.2488 29.6443 16.492 28.8191C11.7264 27.7876 8.20403 25.1056 8.20403 20.5669C8.20403 18.2976 9.24002 16.0282 10.6904 14.3778C10.4832 13.9652 10.276 12.9337 10.276 11.4895C10.276 10.6643 10.276 9.6328 10.6904 8.80758C10.6904 8.39497 11.1048 8.18866 11.312 8.18866H11.5192C12.5552 8.39497 14.6272 9.01388 16.492 10.8706C17.7352 10.458 19.1856 10.2517 20.636 10.2517C22.0864 10.2517 23.5368 10.458 24.78 10.8706C26.6448 9.01388 28.924 8.39497 29.96 8.18866H30.1672C30.5816 8.18866 30.7888 8.39497 30.996 8.80758C30.996 9.6328 30.996 10.6643 30.996 11.4895C30.996 13.14 30.7888 13.9652 30.5816 14.3778C32.032 16.0282 33.068 18.0913 33.068 20.5669C33.068 25.1056 29.5456 27.7876 24.78 28.8191C26.0232 29.8506 26.852 31.7074 26.852 33.5641V38.928C26.852 39.5469 27.4736 40.1658 28.3024 39.9595C35.9688 36.865 41.3559 29.438 41.3559 20.7732C41.3559 8.39497 30.7888 -1.30134 18.3568 0.142794Z" />
            </svg>,
        linkedin:
            <svg height={size} viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg" className={svgStyling}>
                <path d="M35.9115 0H4.80039C2.34483 0 0.355942 1.98889 0.355942 4.44444V35.5556C0.355942 38.0111 2.34483 40 4.80039 40H35.9115C38.3671 40 40.3559 38.0111 40.3559 35.5556V4.44444C40.3559 1.98889 38.3671 0 35.9115 0ZM13.6893 31.1111H8.08261V15.5556H13.6893V31.1111ZM10.7871 12.7044C9.07372 12.7044 7.92928 11.5622 7.92928 10.0378C7.92928 8.51333 9.0715 7.37111 10.9759 7.37111C12.6893 7.37111 13.8337 8.51333 13.8337 10.0378C13.8337 11.5622 12.6915 12.7044 10.7871 12.7044ZM33.6893 31.1111H28.2626V22.6089C28.2626 20.2578 26.8159 19.7156 26.2737 19.7156C25.7315 19.7156 23.9226 20.0778 23.9226 22.6089C23.9226 22.9711 23.9226 31.1111 23.9226 31.1111H18.3159V15.5556H23.9226V17.7267C24.6448 16.46 26.0915 15.5556 28.8048 15.5556C31.5182 15.5556 33.6893 17.7267 33.6893 22.6089V31.1111Z" />
            </svg>,
        mail:
            <svg height={size} viewBox="0 0 38 30" xmlns="http://www.w3.org/2000/svg" className={svgStyling}>
                <path d="M4.25 0C2.33 0 0.76332 1.44867 0.543945 3.31055L19.25 15L37.9561 3.31055C37.7367 1.44867 36.17 0 34.25 0H4.25ZM0.5 7.03491V26.25C0.5 28.3219 2.17812 30 4.25 30H34.25C36.3219 30 38 28.3219 38 26.25V7.03491L20.2424 18.1311C19.6349 18.5099 18.8651 18.5099 18.2576 18.1311L0.5 7.03491Z" />
            </svg>,
    };

    return (
        <>
            {icons[name]}
        </>
    )
}

export default Icons