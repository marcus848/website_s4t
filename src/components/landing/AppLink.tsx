
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AppLink = () => {
  return (
    <div className="fixed bottom-5 left-5">
      <Link to="/matches">
        <Button variant="outline" className="bg-white shadow-lg border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
          Acessar App
        </Button>
      </Link>
    </div>
  );
};

export default AppLink;
