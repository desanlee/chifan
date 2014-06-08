require 'spec_helper'

describe "gamblegames/index" do
  before(:each) do
    assign(:gamblegames, [
      stub_model(Gamblegame,
        :user_id => 1,
        :description => "Description",
        :options => "Options",
        :result => 2
      ),
      stub_model(Gamblegame,
        :user_id => 1,
        :description => "Description",
        :options => "Options",
        :result => 2
      )
    ])
  end

  it "renders a list of gamblegames" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Description".to_s, :count => 2
    assert_select "tr>td", :text => "Options".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
