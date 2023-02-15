function Header() {
    return (
        <div className="font-sans flex flex-row justify-center items-center m-3 p-3 sm:p-20 sm:m-6">
            <p className="bg-gray-300 font-light text-md p-4 m-3 w-full md:w-3/4 text-left text-stone-900 md:text-xl">
                <span className="font-semibold text-xl sm:text-3xl">Hi, my name is Deryn Brown and I am a Software Engineer. </span>
                <br></br>
                <br></br>
                As a former biology and biomedical sciences student, I bring a unique variation of analyzation, intuition, and investigation skills to my work as a software engineer. With a strong background in the biomedical sciences and a deep understanding of the human body and its behavior, I am able to approach problem-solving from multiple angles and create user-friendly solutions. I have gained skills in solving and analyzing a problem without seeing it in its physical form, granting me skills that are helpful in the debugging aspect of the tech world. Whether I am developing new applications or enhancing applications that already exist, I am driven by a passion for creating functional and appealing applications. I am excited to bring my diverse skill set and fresh perspective to any team, and I am always on the search for new challenges and opportunities to grow as a front-end or full-stack developer.
            </p>
            <img className="max-w-full max-h-full" alt="portrait" src="/images/portrait.png" />
        </div>
    );
}

export default Header;