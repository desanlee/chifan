require "spec_helper"

describe GamblegamesController do
  describe "routing" do

    it "routes to #index" do
      get("/gamblegames").should route_to("gamblegames#index")
    end

    it "routes to #new" do
      get("/gamblegames/new").should route_to("gamblegames#new")
    end

    it "routes to #show" do
      get("/gamblegames/1").should route_to("gamblegames#show", :id => "1")
    end

    it "routes to #edit" do
      get("/gamblegames/1/edit").should route_to("gamblegames#edit", :id => "1")
    end

    it "routes to #create" do
      post("/gamblegames").should route_to("gamblegames#create")
    end

    it "routes to #update" do
      put("/gamblegames/1").should route_to("gamblegames#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/gamblegames/1").should route_to("gamblegames#destroy", :id => "1")
    end

  end
end
