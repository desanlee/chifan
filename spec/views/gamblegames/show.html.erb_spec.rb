require 'spec_helper'

describe "gamblegames/show" do
  before(:each) do
    @gamblegame = assign(:gamblegame, stub_model(Gamblegame,
      :user_id => 1,
      :description => "Description",
      :options => "Options",
      :result => 2
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Description/)
    rendered.should match(/Options/)
    rendered.should match(/2/)
  end
end
