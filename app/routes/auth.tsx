import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => ([
    { title: 'TalentIQ | Auth' },
    { name: 'description', content: 'log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();

    // Determine where to go after login; default to home if not provided
    const params = new URLSearchParams(location.search);
    const next = params.get('next') || '/';

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(next, { replace: true });
        }
    }, [auth.isAuthenticated, next, navigate])

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center" >
            <div className="gradient-border shadow-lg" >
                <section className="flx flex-col gap-8 bg-white rounded-2xl p-9" >
                    <div className="flex flex-col items-center gap-2 text-center mb-6" >
                        <h1>Welcome</h1>
                        <h2 className="text-sm md:text-base text-gray-700">Log In to Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse" >
                                <p>Signing you in....</p>
                            </button>
                        ):(
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ):(
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>

                </section>

            </div>
        </main>
    )
}
export default Auth
