class GamblegamesController < ApplicationController
  # GET /gamblegames
  # GET /gamblegames.json
  def index
    @gamblegames = Gamblegame.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gamblegames }
    end
  end

  # GET /gamblegames/1
  # GET /gamblegames/1.json
  def show
    @gamblegame = Gamblegame.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @gamblegame }
    end
  end

  # GET /gamblegames/new
  # GET /gamblegames/new.json
  def new
    @gamblegame = Gamblegame.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @gamblegame }
    end
  end

  # GET /gamblegames/1/edit
  def edit
    @gamblegame = Gamblegame.find(params[:id])
  end

  # POST /gamblegames
  # POST /gamblegames.json
  def create
    @gamblegame = Gamblegame.new(params[:gamblegame])

    respond_to do |format|
      if @gamblegame.save
        format.html { redirect_to @gamblegame, notice: 'Gamblegame was successfully created.' }
        format.json { render json: @gamblegame, status: :created, location: @gamblegame }
      else
        format.html { render action: "new" }
        format.json { render json: @gamblegame.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /gamblegames/1
  # PUT /gamblegames/1.json
  def update
    @gamblegame = Gamblegame.find(params[:id])

    respond_to do |format|
      if @gamblegame.update_attributes(params[:gamblegame])
        format.html { redirect_to @gamblegame, notice: 'Gamblegame was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @gamblegame.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gamblegames/1
  # DELETE /gamblegames/1.json
  def destroy
    @gamblegame = Gamblegame.find(params[:id])
    @gamblegame.destroy

    respond_to do |format|
      format.html { redirect_to gamblegames_url }
      format.json { head :no_content }
    end
  end
end
