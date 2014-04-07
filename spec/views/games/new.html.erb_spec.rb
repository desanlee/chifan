require 'spec_helper'

describe "games/new" do
  before(:each) do
    assign(:game, stub_model(Game,
      :season => 1,
      :episode => 1,
      :title => "MyString",
      :info => "MyString",
      :task => "MyString"
    ).as_new_record)
  end

  it "renders new game form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => games_path, :method => "post" do
      assert_select "input#game_season", :name => "game[season]"
      assert_select "input#game_episode", :name => "game[episode]"
      assert_select "input#game_title", :name => "game[title]"
      assert_select "input#game_info", :name => "game[info]"
      assert_select "input#game_task", :name => "game[task]"
    end
  end
end
