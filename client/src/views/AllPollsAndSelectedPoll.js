import AllPolls from "../components/AllPolls";
import SelectedPoll from "../components/SelectedPoll";

const AllPollsAndSelectedPolls = (props) =>
{
    return(    
        <div>
            <header>
                <h1>EZ Poll</h1>
                <button>Login</button>
            </header>
            <div>
                <AllPolls />
                <SelectedPoll />
            </div>
        </div>
    )
}

export default AllPollsAndSelectedPolls;