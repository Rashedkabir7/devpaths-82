export default function Home() {
  const loginGoogle = () => window.open("http://localhost:5000/api/auth/google", "_self");
  const loginGitHub = () => window.open("http://localhost:5000/api/auth/github", "_self");
  const loginDiscord = () => window.open("http://localhost:5000/api/auth/discord", "_self");

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={loginGoogle}>Login with Google</button>
      <button onClick={loginGitHub}>Login with GitHub</button>
      <button onClick={loginDiscord}>Login with Discord</button>
    </div>
  );
}
