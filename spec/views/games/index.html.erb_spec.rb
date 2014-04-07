require 'spec_helper'

describe "games/index" do
  before(:each) do
    assign(:games, [
      stub_model(Game,
        :season => 1,
        :episode => 2,
        :title => "Title",
        :info => "Info",
        :task => "Task"
      ),
      stub_model(Game,
        :season => 1,
        :episode => 2,
        :title => "Title",
        :info => "Info",
        :task => "Task"
      )
    ])
  end

  it "renders a list of games" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Info".to_s, :count => 2
    assert_select "tr>td", :text => "Task".to_s, :count => 2
  end
end
