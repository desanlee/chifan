require 'spec_helper'

describe "bets/new" do
  before(:each) do
    assign(:bet, stub_model(Bet,
      :user_id => 1,
      :gamble_id => 1,
      :selection => 1
    ).as_new_record)
  end

  it "renders new bet form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => bets_path, :method => "post" do
      assert_select "input#bet_user_id", :name => "bet[user_id]"
      assert_select "input#bet_gamble_id", :name => "bet[gamble_id]"
      assert_select "input#bet_selection", :name => "bet[selection]"
    end
  end
end
