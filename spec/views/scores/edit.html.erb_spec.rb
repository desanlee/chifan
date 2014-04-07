require 'spec_helper'

describe "scores/edit" do
  before(:each) do
    @score = assign(:score, stub_model(Score,
      :game_id => 1,
      :user_id => 1,
      :record => 1.5
    ))
  end

  it "renders the edit score form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => scores_path(@score), :method => "post" do
      assert_select "input#score_game_id", :name => "score[game_id]"
      assert_select "input#score_user_id", :name => "score[user_id]"
      assert_select "input#score_record", :name => "score[record]"
    end
  end
end
