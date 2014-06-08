require 'spec_helper'

describe "bets/edit" do
  before(:each) do
    @bet = assign(:bet, stub_model(Bet,
      :user_id => 1,
      :gamble_id => 1,
      :selection => 1
    ))
  end

  it "renders the edit bet form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => bets_path(@bet), :method => "post" do
      assert_select "input#bet_user_id", :name => "bet[user_id]"
      assert_select "input#bet_gamble_id", :name => "bet[gamble_id]"
      assert_select "input#bet_selection", :name => "bet[selection]"
    end
  end
end
