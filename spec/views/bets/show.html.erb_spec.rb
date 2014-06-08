require 'spec_helper'

describe "bets/show" do
  before(:each) do
    @bet = assign(:bet, stub_model(Bet,
      :user_id => 1,
      :gamble_id => 2,
      :selection => 3
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/2/)
    rendered.should match(/3/)
  end
end
