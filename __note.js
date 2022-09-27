/**
 * * Ref : https://sanjayrajpoot.hashnode.dev/you-must-use-these-git-commands
 * 
* Ref : https://apoorvdubey.hashnode.dev/basic-git-commands-every-developer-should-know

*Ref : https://sdutta.hashnode.dev/all-you-need-to-know-about-git

Git Troubleshooting - Permission Denied (publickey)==================================================
Ref: https://yasmina95.hashnode.dev/git-troubleshooting-permission-denied-publickey
 * */ 

/**
 * For New Repository (6 commands)
 * ============
 * git init
 * git add .
 * git commit -m "initial commit"
 * git branch -M master
 * git remote add origin https://github.com/faisal2410/basic-git-commands.git * 
 * git push -u origin master
 * 
 * For existing repository (3 commands)
 * =======================
 * git add .
 * git commit -m "2nd commit"
 * git push
 * 
 * */ 
/**
 * git config: 
 * ==========
 * git config --global user.name "John Doe"
  git config --global user.email johndoe@example.com
 * */ 
/**
 * Common git commands
 * =========================
 * Un staging File
 * ==============
 * git reset Head readme.md
 * 
 * git log
 * 
 * git log --patch
 * 
 * git status
 * 
 * Creating .gitkeep file with in an empty folder
 * ref : https://www.freecodecamp.org/news/what-is-gitkeep/
 * ======================
 * touch temp/.gitkeep
 * 
 * Removing file (After removing you should push)
 * ============
 * 
 * rm newfile.txt
 * 
 * Removing folder
 * ==============
 *  rm -r test
 * 
 * push
 * =====
 * git add .
 * git commit -m "updated"
 * git push
 * 
 * */ 

/**
 * git branch   //which branch available
 * 
 * git checkout -b feature/new-table
 * git checkout master
 * 
 * Delete Branch
 * git branch -D feature/new-table  //Force delete
 * git branch -d feature/new-table
 * 
 * Merging Branch
 * ==============
 * git merge feature/new-table  //stay on the master branch and merge feature/new-table branch
 * 
 * git merge bugfix/table
 *Note : after merging feature/new-table branch with master branch we can delete
this feature/new-table branch by
 git branch -d feature/new-table
  * */ 

/**
 * Rebasing commits
 * ==============
 * git rebase master         // command executed from bugfix/table branch
 * git merge bugfix/table    //command executed from master branch
 * 
 * */  

/**
 * Merge Conflict :
git merge --abort
git rebase master
git rebase --abort
 * 
 * 
 * */ 