require 'spec_helper'

describe "bets/index" do
  before(:each) do
    assign(:bets, [
      stub_model(Bet,
        :user_id => 1,
        :gamble_id => 2,
        :selection => 3
      ),
      stub_model(Bet,
        :user_id => 1,
        :gamble_id => 2,
        :selection => 3
      )
    ])
  end

  it "renders a list of bets" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
  end
end
